import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-login');
}

export default function ActiveEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-login" />;
}
