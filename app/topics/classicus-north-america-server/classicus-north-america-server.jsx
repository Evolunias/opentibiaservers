import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-north-america-server');
}

export default function ClassicusNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-north-america-server" />;
}
