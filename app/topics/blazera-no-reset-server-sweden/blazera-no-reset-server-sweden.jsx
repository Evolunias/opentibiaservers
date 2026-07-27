import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-sweden');
}

export default function BlazeraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-sweden" />;
}
