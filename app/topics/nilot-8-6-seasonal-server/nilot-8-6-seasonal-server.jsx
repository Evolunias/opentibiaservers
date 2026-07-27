import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-seasonal-server');
}

export default function Nilot86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-seasonal-server" />;
}
