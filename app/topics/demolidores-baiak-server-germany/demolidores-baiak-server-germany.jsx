import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-germany');
}

export default function DemolidoresBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-germany" />;
}
