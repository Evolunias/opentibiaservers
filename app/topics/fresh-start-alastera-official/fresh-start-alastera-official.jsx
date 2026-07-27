import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-official');
}

export default function FreshStartAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-official" />;
}
