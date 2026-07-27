import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-seasonal-server');
}

export default function Nilot81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-seasonal-server" />;
}
