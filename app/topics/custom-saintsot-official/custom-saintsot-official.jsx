import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-official');
}

export default function CustomSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-official" />;
}
