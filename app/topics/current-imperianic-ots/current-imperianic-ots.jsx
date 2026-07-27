import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-ots');
}

export default function CurrentImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-ots" />;
}
