import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-ot-server');
}

export default function NoResetNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-ot-server" />;
}
