import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-ots');
}

export default function FreshStartOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-ots" />;
}
