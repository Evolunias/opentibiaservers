import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-france');
}

export default function OlderaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-france" />;
}
