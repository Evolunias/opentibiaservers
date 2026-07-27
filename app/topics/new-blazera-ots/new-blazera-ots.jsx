import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-ots');
}

export default function NewBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-ots" />;
}
