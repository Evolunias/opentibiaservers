import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-north-america-servers');
}

export default function ClassicusNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-north-america-servers" />;
}
