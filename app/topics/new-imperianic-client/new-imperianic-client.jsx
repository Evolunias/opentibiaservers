import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-client');
}

export default function NewImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-client" />;
}
