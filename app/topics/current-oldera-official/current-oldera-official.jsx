import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-official');
}

export default function CurrentOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-official" />;
}
