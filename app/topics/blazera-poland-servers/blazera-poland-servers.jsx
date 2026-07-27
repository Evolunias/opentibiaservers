import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-poland-servers');
}

export default function BlazeraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-poland-servers" />;
}
