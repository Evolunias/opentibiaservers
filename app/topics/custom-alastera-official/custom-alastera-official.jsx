import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-official');
}

export default function CustomAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-official" />;
}
