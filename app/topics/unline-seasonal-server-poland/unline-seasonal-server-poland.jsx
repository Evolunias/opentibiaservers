import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-poland');
}

export default function UnlineSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-poland" />;
}
