import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-website');
}

export default function ActiveThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-website" />;
}
