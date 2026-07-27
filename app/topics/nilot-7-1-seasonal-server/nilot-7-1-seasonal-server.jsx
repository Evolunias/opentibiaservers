import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-seasonal-server');
}

export default function Nilot71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-seasonal-server" />;
}
