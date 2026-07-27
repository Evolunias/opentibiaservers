import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-website');
}

export default function NewTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-website" />;
}
