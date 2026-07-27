import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-wars');
}

export default function IsaraWarsKeywordPage() {
  return <StaticKeywordPage slug="isara-wars" />;
}
