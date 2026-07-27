import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-poland');
}

export default function CyntaraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-poland" />;
}
