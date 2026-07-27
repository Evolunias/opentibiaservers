import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-client');
}

export default function TopImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-client" />;
}
