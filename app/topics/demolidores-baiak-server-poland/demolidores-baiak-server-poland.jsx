import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-poland');
}

export default function DemolidoresBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-poland" />;
}
