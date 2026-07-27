import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-official');
}

export default function NewSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-official" />;
}
