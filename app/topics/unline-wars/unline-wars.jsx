import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-wars');
}

export default function UnlineWarsKeywordPage() {
  return <StaticKeywordPage slug="unline-wars" />;
}
