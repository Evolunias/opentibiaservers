import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-seasonal-server');
}

export default function Nilot84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-seasonal-server" />;
}
