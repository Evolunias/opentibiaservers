import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-poland');
}

export default function TibijkaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-poland" />;
}
