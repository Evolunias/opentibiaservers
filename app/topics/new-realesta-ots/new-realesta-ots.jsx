import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-ots');
}

export default function NewRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-ots" />;
}
