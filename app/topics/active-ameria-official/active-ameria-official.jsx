import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-official');
}

export default function ActiveAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-official" />;
}
