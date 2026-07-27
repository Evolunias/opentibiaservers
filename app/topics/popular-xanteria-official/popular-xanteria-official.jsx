import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-official');
}

export default function PopularXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-official" />;
}
