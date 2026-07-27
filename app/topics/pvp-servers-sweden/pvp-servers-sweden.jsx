import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-sweden');
}

export default function PvpServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-sweden" />;
}
