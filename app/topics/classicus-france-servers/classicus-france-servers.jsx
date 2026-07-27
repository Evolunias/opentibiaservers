import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-france-servers');
}

export default function ClassicusFranceServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-france-servers" />;
}
