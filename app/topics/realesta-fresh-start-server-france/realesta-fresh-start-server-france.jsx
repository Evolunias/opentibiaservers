import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-france');
}

export default function RealestaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-france" />;
}
