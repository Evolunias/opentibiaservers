import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-poland');
}

export default function SabrehavenSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-poland" />;
}
