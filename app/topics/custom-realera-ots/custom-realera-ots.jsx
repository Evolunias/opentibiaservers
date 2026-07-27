import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-ots');
}

export default function CustomRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-ots" />;
}
