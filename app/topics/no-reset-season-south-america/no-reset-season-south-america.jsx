import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-south-america');
}

export default function NoResetSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-south-america" />;
}
