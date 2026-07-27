import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-official');
}

export default function PopularSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-official" />;
}
