import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-seasonal-server');
}

export default function Oldera71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-seasonal-server" />;
}
