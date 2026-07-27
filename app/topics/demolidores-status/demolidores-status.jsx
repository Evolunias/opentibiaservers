import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-status');
}

export default function DemolidoresStatusKeywordPage() {
  return <StaticKeywordPage slug="demolidores-status" />;
}
