import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-usa');
}

export default function BlazeraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-usa" />;
}
