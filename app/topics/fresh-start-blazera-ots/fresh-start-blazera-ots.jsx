import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-ots');
}

export default function FreshStartBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-ots" />;
}
