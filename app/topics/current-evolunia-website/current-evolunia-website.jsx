import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-website');
}

export default function CurrentEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-website" />;
}
