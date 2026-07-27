import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-pvpe-server');
}

export default function Nilot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-pvpe-server" />;
}
