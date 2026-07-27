import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-europe');
}

export default function NoResetOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-europe" />;
}
