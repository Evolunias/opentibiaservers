import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-ot-server');
}

export default function NoResetTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-ot-server" />;
}
