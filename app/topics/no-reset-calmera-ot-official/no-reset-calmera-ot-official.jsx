import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-official');
}

export default function NoResetCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-official" />;
}
