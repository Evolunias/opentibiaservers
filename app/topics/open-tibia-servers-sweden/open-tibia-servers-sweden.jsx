import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-sweden');
}

export default function OpenTibiaServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-sweden" />;
}
