import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-france-server');
}

export default function RealeraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="realera-france-server" />;
}
