import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-wars');
}

export default function HarmoniaWarsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-wars" />;
}
