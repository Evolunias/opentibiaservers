import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-pvpe-server');
}

export default function Nilot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-pvpe-server" />;
}
