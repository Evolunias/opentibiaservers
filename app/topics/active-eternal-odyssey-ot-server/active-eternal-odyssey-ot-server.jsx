import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-ot-server');
}

export default function ActiveEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-ot-server" />;
}
