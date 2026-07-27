import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-ots');
}

export default function TopRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-ots" />;
}
