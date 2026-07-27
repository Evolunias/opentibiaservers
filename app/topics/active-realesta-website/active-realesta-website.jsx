import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-website');
}

export default function ActiveRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-website" />;
}
