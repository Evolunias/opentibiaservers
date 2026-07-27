import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-pvpe-server');
}

export default function Nilot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-pvpe-server" />;
}
