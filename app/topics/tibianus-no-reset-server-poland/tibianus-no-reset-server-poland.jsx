import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-poland');
}

export default function TibianusNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-poland" />;
}
