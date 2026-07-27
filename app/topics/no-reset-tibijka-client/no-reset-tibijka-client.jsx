import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-client');
}

export default function NoResetTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-client" />;
}
