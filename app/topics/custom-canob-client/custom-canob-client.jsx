import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-client');
}

export default function CustomCanobClientKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-client" />;
}
