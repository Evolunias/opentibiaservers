import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-north-america-servers');
}

export default function BlazeraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-north-america-servers" />;
}
