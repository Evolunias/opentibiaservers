import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-server');
}

export default function CustomEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-server" />;
}
