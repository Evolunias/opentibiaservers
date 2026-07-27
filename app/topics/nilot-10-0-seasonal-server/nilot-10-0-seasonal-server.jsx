import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-seasonal-server');
}

export default function Nilot100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-seasonal-server" />;
}
