import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-official');
}

export default function BestKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-official" />;
}
