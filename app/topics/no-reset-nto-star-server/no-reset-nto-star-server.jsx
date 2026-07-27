import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-server');
}

export default function NoResetNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-server" />;
}
