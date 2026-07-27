import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-client');
}

export default function RealestaClientKeywordPage() {
  return <StaticKeywordPage slug="realesta-client" />;
}
