import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-official');
}

export default function CustomOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-official" />;
}
