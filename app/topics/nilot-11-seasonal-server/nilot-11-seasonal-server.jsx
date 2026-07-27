import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-seasonal-server');
}

export default function Nilot11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-seasonal-server" />;
}
