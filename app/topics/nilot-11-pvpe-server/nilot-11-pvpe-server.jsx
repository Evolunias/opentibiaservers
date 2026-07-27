import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-pvpe-server');
}

export default function Nilot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-pvpe-server" />;
}
