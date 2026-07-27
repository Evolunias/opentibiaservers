import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-website');
}

export default function NoResetLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-website" />;
}
