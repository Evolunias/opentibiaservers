import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-brazil');
}

export default function TibijkaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-brazil" />;
}
