import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-sweden');
}

export default function NonPvpServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-sweden" />;
}
