import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-sweden');
}

export default function PvpeServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-sweden" />;
}
