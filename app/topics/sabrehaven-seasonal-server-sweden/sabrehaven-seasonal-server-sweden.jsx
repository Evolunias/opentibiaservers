import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-sweden');
}

export default function SabrehavenSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-sweden" />;
}
