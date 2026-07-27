import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-website');
}

export default function CustomThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-website" />;
}
