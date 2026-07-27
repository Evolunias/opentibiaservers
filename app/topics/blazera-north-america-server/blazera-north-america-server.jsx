import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-north-america-server');
}

export default function BlazeraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-north-america-server" />;
}
