import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-uk');
}

export default function TibijkaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-uk" />;
}
