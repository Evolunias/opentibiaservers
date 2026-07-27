import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-pvpe-server');
}

export default function Nilot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-pvpe-server" />;
}
