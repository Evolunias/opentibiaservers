import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-client');
}

export default function BlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="blazera-client" />;
}
