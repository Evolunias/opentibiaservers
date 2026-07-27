import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-ots');
}

export default function LowrateTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-ots" />;
}
