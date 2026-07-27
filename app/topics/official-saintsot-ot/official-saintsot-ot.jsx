import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-ot');
}

export default function OfficialSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-ot" />;
}
