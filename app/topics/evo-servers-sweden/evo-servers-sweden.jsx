import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-sweden');
}

export default function EvoServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-sweden" />;
}
