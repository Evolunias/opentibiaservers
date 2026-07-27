import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-poland');
}

export default function SeasonalServersPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-poland" />;
}
