import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-official');
}

export default function TopAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-official" />;
}
