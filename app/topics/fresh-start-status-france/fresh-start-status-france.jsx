import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-france');
}

export default function FreshStartStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-france" />;
}
