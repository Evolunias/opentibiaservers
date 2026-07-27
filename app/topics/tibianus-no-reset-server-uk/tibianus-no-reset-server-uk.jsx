import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-uk');
}

export default function TibianusNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-uk" />;
}
