import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-website');
}

export default function OfficialThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-website" />;
}
