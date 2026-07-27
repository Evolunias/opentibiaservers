import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-ots');
}

export default function NewRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-realera-ots" />;
}
