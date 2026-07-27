import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-wars');
}

export default function NovaWarsKeywordPage() {
  return <StaticKeywordPage slug="nova-wars" />;
}
