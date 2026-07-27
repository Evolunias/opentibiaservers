import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-official');
}

export default function FreshStartSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-official" />;
}
