import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-argentina');
}

export default function BlazeraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-argentina" />;
}
