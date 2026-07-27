import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-official');
}

export default function FreshStartXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-official" />;
}
