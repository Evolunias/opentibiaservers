import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-server');
}

export default function NoResetTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-server" />;
}
