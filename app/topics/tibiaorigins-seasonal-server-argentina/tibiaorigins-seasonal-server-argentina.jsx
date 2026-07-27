import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-argentina');
}

export default function TibiaoriginsSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-argentina" />;
}
