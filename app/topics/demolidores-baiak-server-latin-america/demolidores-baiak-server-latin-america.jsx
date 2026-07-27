import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-latin-america');
}

export default function DemolidoresBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-latin-america" />;
}
