import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-server');
}

export default function NoResetRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-server" />;
}
