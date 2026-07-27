import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-ots');
}

export default function NewKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-ots" />;
}
