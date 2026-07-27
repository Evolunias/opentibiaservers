import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-website');
}

export default function MistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-website" />;
}
