import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-seasonal-server');
}

export default function Nilot13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-seasonal-server" />;
}
