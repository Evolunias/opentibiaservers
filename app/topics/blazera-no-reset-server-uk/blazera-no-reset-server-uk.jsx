import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-uk');
}

export default function BlazeraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-uk" />;
}
