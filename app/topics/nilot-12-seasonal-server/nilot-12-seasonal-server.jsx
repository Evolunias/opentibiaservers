import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-seasonal-server');
}

export default function Nilot12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-seasonal-server" />;
}
