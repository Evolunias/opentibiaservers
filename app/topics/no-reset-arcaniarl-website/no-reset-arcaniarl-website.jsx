import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-website');
}

export default function NoResetArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-website" />;
}
