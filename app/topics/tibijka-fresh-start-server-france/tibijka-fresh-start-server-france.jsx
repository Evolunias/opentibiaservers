import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-france');
}

export default function TibijkaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-france" />;
}
