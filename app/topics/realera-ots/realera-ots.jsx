import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-ots');
}

export default function RealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="realera-ots" />;
}
