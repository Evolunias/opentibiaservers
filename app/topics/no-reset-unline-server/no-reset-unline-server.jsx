import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-server');
}

export default function NoResetUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-server" />;
}
