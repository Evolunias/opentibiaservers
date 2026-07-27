import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-pvpe-server');
}

export default function Nilot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-pvpe-server" />;
}
