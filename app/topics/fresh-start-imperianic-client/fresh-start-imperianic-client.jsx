import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-client');
}

export default function FreshStartImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-client" />;
}
