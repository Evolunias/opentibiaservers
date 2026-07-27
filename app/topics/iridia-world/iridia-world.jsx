import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-world');
}

export default function IridiaWorldKeywordPage() {
  return <StaticKeywordPage slug="iridia-world" />;
}
