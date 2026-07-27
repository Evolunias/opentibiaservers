import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-website');
}

export default function LowrateMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-website" />;
}
