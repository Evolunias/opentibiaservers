import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-europe-server');
}

export default function BlazeraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-europe-server" />;
}
