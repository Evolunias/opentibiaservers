import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-website');
}

export default function NewUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-unline-website" />;
}
