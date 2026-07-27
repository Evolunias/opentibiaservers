import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-website');
}

export default function NoResetNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-website" />;
}
