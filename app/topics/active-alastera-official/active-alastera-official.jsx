import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-official');
}

export default function ActiveAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-official" />;
}
