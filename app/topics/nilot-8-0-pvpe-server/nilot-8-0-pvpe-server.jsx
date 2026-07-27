import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-pvpe-server');
}

export default function Nilot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-pvpe-server" />;
}
