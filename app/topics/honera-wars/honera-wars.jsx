import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-wars');
}

export default function HoneraWarsKeywordPage() {
  return <StaticKeywordPage slug="honera-wars" />;
}
