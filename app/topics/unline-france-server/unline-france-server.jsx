import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-france-server');
}

export default function UnlineFranceServerKeywordPage() {
  return <StaticKeywordPage slug="unline-france-server" />;
}
