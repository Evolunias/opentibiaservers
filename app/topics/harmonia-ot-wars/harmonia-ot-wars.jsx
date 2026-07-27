import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-wars');
}

export default function HarmoniaOtWarsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-wars" />;
}
