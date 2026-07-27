import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-website');
}

export default function NoResetTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-website" />;
}
