import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-ot');
}

export default function NoResetTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-ot" />;
}
