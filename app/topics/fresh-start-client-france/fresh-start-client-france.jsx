import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-france');
}

export default function FreshStartClientFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-france" />;
}
