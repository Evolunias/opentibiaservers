import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-website');
}

export default function NoResetSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-website" />;
}
