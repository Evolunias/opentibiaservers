import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-sweden');
}

export default function TibiaoriginsSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-sweden" />;
}
