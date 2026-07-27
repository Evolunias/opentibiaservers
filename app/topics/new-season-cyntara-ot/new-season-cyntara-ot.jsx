import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-ot');
}

export default function NewSeasonCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-ot" />;
}
