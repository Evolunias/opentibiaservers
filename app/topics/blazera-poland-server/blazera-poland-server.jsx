import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-poland-server');
}

export default function BlazeraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-poland-server" />;
}
