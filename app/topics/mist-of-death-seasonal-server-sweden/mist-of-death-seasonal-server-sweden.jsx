import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-sweden');
}

export default function MistOfDeathSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-sweden" />;
}
