import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-wars');
}

export default function OxygenotWarsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-wars" />;
}
