import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-europe');
}

export default function UnlineNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-europe" />;
}
