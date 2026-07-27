import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-official');
}

export default function SaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="saintsot-official" />;
}
