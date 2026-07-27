import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-website');
}

export default function HighrateDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-website" />;
}
