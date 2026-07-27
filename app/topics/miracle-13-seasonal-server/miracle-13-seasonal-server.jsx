import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-seasonal-server');
}

export default function Miracle13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-seasonal-server" />;
}
