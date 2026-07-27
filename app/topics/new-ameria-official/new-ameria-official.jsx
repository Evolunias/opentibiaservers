import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-official');
}

export default function NewAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-official" />;
}
