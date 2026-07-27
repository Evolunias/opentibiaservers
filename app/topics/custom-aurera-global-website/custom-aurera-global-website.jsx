import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-website');
}

export default function CustomAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-website" />;
}
