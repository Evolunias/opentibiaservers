import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-poland');
}

export default function BlazeraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-poland" />;
}
