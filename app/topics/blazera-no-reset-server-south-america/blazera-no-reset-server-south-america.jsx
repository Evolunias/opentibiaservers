import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-south-america');
}

export default function BlazeraNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-south-america" />;
}
