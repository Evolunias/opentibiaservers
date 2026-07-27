import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-seasonal-server');
}

export default function Medivia84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-seasonal-server" />;
}
