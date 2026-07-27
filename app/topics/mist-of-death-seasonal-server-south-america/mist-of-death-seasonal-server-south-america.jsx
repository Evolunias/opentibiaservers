import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-south-america');
}

export default function MistOfDeathSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-south-america" />;
}
