import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-website');
}

export default function NewKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-website" />;
}
