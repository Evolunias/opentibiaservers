import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-usa');
}

export default function TibijkaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-usa" />;
}
