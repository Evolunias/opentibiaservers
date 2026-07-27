import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-seasonal-server');
}

export default function Medivia80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-seasonal-server" />;
}
