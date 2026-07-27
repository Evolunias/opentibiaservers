import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-seasonal-server');
}

export default function Nilot15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-seasonal-server" />;
}
