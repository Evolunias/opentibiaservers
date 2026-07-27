import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-ots');
}

export default function NewOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-ots" />;
}
