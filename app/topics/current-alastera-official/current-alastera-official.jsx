import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-official');
}

export default function CurrentAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-official" />;
}
