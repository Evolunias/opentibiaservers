import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-ot');
}

export default function NoResetTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-ot" />;
}
