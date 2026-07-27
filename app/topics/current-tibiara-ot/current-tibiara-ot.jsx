import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-ot');
}

export default function CurrentTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-ot" />;
}
