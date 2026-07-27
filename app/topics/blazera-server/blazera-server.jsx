import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-server');
}

export default function BlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-server" />;
}
