import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria');
}

export default function KasteriaKeywordPage() {
  return <StaticKeywordPage slug="kasteria" />;
}
