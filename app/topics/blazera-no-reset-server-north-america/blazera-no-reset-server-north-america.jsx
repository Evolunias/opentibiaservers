import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-north-america');
}

export default function BlazeraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-north-america" />;
}
