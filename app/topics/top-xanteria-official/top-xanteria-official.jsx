import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-official');
}

export default function TopXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-official" />;
}
