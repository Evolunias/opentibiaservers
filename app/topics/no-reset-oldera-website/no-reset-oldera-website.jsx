import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-website');
}

export default function NoResetOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-website" />;
}
