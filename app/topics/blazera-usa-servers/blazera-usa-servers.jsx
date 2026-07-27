import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-usa-servers');
}

export default function BlazeraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-usa-servers" />;
}
