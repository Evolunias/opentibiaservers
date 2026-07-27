import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-client');
}

export default function ActiveCanobClientKeywordPage() {
  return <StaticKeywordPage slug="active-canob-client" />;
}
