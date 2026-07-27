import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-official');
}

export default function OfficialAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-official" />;
}
