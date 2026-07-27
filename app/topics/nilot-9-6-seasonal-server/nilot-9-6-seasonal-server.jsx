import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-seasonal-server');
}

export default function Nilot96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-seasonal-server" />;
}
