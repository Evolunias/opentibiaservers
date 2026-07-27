import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-pvpe-server');
}

export default function Nilot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-pvpe-server" />;
}
