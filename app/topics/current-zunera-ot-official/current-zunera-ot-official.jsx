import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-official');
}

export default function CurrentZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-official" />;
}
