import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-europe');
}

export default function TibianusNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-europe" />;
}
