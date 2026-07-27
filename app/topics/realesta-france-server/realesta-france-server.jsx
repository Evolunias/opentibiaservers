import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-france-server');
}

export default function RealestaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-france-server" />;
}
