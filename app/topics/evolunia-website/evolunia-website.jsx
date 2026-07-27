import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-website');
}

export default function EvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="evolunia-website" />;
}
