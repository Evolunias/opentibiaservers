import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-website');
}

export default function NewThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-website" />;
}
