import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-ot');
}

export default function LowrateTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-ot" />;
}
