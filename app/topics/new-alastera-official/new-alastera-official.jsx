import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-official');
}

export default function NewAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-official" />;
}
