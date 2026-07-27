import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-seasonal-server');
}

export default function Nilot76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-seasonal-server" />;
}
