import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-latin-america-servers');
}

export default function BlazeraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-latin-america-servers" />;
}
