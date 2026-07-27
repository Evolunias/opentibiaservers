import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-france-server');
}

export default function ClassicusFranceServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-france-server" />;
}
