import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-website');
}

export default function NoResetDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-website" />;
}
