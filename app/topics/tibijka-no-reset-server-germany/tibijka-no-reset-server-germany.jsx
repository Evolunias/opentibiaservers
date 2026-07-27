import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-germany');
}

export default function TibijkaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-germany" />;
}
