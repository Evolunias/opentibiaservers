import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-official');
}

export default function NoResetZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-official" />;
}
