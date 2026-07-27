import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-germany');
}

export default function SabrehavenSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-germany" />;
}
