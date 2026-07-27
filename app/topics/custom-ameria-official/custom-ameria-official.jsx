import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-official');
}

export default function CustomAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-official" />;
}
