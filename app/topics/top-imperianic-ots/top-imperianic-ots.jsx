import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-ots');
}

export default function TopImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-ots" />;
}
