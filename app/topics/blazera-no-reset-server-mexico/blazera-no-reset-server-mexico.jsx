import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-mexico');
}

export default function BlazeraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-mexico" />;
}
