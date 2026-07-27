import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-official');
}

export default function TopOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-official" />;
}
