import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-official');
}

export default function BestAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-official" />;
}
