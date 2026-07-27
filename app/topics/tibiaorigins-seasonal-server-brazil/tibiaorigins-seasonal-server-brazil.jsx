import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-brazil');
}

export default function TibiaoriginsSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-brazil" />;
}
