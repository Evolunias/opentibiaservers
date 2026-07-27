import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-official');
}

export default function HighrateSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-official" />;
}
