import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-ot-server');
}

export default function OfficialEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-ot-server" />;
}
