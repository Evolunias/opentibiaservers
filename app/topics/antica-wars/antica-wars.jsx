import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-wars');
}

export default function AnticaWarsKeywordPage() {
  return <StaticKeywordPage slug="antica-wars" />;
}
