import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-world');
}

export default function NovaWorldKeywordPage() {
  return <StaticKeywordPage slug="nova-world" />;
}
