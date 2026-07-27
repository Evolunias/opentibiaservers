import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp');
}

export default function KasteriaHighExpKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp" />;
}
