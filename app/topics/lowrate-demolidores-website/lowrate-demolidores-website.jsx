import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-website');
}

export default function LowrateDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-website" />;
}
