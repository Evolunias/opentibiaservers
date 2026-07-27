import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-mexico');
}

export default function TibijkaNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-mexico" />;
}
