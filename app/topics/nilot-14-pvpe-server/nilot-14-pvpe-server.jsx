import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-pvpe-server');
}

export default function Nilot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-pvpe-server" />;
}
