import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-wars');
}

export default function ObsidiaWarsKeywordPage() {
  return <StaticKeywordPage slug="obsidia-wars" />;
}
