import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-website');
}

export default function NoResetCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-website" />;
}
