import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-official');
}

export default function TopSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-official" />;
}
