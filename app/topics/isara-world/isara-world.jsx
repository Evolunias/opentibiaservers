import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-world');
}

export default function IsaraWorldKeywordPage() {
  return <StaticKeywordPage slug="isara-world" />;
}
