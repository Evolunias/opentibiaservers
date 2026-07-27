import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-ots');
}

export default function OfficialZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-ots" />;
}
