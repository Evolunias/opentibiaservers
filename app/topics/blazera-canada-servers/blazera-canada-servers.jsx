import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-canada-servers');
}

export default function BlazeraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-canada-servers" />;
}
