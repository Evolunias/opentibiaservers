import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-website');
}

export default function OxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-website" />;
}
