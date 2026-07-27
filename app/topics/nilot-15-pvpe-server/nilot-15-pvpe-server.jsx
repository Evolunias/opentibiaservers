import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-pvpe-server');
}

export default function Nilot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-pvpe-server" />;
}
