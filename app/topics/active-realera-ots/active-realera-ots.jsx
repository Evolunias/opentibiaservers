import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-ots');
}

export default function ActiveRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-realera-ots" />;
}
