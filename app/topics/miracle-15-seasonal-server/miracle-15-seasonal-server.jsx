import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-seasonal-server');
}

export default function Miracle15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-seasonal-server" />;
}
