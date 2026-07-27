import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-wars');
}

export default function CelestaWarsKeywordPage() {
  return <StaticKeywordPage slug="celesta-wars" />;
}
