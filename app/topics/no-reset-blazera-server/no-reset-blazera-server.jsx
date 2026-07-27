import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-server');
}

export default function NoResetBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-server" />;
}
