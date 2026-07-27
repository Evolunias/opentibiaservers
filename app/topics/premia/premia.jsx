import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia');
}

export default function PremiaKeywordPage() {
  return <StaticKeywordPage slug="premia" />;
}
