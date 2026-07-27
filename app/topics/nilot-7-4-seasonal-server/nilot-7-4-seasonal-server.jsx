import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-seasonal-server');
}

export default function Nilot74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-seasonal-server" />;
}
