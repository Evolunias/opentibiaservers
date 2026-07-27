import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-latin-america-server');
}

export default function BlazeraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-latin-america-server" />;
}
