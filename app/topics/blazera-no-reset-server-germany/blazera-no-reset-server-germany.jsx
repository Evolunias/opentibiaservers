import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-germany');
}

export default function BlazeraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-germany" />;
}
