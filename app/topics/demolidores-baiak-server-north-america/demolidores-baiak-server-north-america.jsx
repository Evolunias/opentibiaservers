import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-north-america');
}

export default function DemolidoresBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-north-america" />;
}
