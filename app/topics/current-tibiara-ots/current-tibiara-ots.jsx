import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-ots');
}

export default function CurrentTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-ots" />;
}
