import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-south-america-server');
}

export default function BlazeraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-south-america-server" />;
}
