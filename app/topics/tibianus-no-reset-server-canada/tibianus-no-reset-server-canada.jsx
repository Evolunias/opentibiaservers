import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-canada');
}

export default function TibianusNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-canada" />;
}
