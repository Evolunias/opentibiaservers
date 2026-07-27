import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-ot-server');
}

export default function CustomEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-ot-server" />;
}
