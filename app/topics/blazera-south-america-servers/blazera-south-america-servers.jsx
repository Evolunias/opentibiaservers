import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-south-america-servers');
}

export default function BlazeraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-south-america-servers" />;
}
