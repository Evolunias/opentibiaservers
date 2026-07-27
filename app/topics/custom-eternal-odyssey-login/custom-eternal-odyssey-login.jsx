import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-login');
}

export default function CustomEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-login" />;
}
