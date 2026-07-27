import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-europe');
}

export default function TibijkaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-europe" />;
}
