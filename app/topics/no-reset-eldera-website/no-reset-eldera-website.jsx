import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-website');
}

export default function NoResetElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-website" />;
}
