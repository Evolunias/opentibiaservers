import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-pvpe-server');
}

export default function Nilot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-pvpe-server" />;
}
