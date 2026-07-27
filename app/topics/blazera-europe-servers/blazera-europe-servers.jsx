import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-europe-servers');
}

export default function BlazeraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-europe-servers" />;
}
