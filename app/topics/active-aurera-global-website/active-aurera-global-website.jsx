import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-website');
}

export default function ActiveAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-website" />;
}
