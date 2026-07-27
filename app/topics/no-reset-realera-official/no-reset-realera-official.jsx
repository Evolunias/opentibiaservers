import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-official');
}

export default function NoResetRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-official" />;
}
