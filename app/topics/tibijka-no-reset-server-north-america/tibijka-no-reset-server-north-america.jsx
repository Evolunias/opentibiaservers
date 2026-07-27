import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-north-america');
}

export default function TibijkaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-north-america" />;
}
