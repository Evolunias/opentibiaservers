import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-login');
}

export default function NewEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-login" />;
}
