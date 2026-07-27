import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-germany-server');
}

export default function BlazeraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-germany-server" />;
}
