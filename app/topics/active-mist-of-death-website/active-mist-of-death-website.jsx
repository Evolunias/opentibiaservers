import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-website');
}

export default function ActiveMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-website" />;
}
