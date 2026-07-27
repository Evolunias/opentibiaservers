import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara');
}

export default function IsaraKeywordPage() {
  return <StaticKeywordPage slug="isara" />;
}
