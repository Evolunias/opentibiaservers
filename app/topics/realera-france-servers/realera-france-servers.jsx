import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-france-servers');
}

export default function RealeraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="realera-france-servers" />;
}
