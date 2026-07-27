import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-ots');
}

export default function OfficialRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-realera-ots" />;
}
