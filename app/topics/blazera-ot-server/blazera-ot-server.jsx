import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-ot-server');
}

export default function BlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-ot-server" />;
}
