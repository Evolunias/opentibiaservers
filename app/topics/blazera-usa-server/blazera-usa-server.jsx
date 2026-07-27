import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-usa-server');
}

export default function BlazeraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-usa-server" />;
}
