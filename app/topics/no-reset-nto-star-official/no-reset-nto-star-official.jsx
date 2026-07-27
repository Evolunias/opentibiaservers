import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-official');
}

export default function NoResetNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-official" />;
}
