import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-sweden');
}

export default function NoResetSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-sweden" />;
}
