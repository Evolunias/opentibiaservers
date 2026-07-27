import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-ots');
}

export default function NoResetTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-ots" />;
}
