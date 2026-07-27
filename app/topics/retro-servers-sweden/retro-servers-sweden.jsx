import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-sweden');
}

export default function RetroServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-sweden" />;
}
