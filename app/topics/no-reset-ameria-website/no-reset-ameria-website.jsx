import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-website');
}

export default function NoResetAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-website" />;
}
