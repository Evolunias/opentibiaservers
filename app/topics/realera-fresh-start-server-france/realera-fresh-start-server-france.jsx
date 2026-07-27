import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-france');
}

export default function RealeraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-france" />;
}
