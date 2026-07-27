import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-ots');
}

export default function TopRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-realera-ots" />;
}
