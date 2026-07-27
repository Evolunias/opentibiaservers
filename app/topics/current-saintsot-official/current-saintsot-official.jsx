import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-official');
}

export default function CurrentSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-official" />;
}
