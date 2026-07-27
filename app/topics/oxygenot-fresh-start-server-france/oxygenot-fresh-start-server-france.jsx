import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-france');
}

export default function OxygenotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-france" />;
}
