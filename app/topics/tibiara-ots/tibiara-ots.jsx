import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-ots');
}

export default function TibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-ots" />;
}
