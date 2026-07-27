import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-ots');
}

export default function OriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-ots" />;
}
