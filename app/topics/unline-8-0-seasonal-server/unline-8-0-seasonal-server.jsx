import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-seasonal-server');
}

export default function Unline80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-seasonal-server" />;
}
