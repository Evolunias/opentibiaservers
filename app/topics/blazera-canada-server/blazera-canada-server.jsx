import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-canada-server');
}

export default function BlazeraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-canada-server" />;
}
