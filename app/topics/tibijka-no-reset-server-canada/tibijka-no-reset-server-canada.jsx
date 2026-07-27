import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-canada');
}

export default function TibijkaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-canada" />;
}
