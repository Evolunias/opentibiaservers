import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-france');
}

export default function LumineraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-france" />;
}
