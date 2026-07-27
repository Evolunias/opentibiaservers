import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-world');
}

export default function AmeraWorldKeywordPage() {
  return <StaticKeywordPage slug="amera-world" />;
}
