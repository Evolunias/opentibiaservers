import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-south-america-servers');
}

export default function ClassicusSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-south-america-servers" />;
}
