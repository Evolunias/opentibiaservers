import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-ots');
}

export default function RealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="realesta-ots" />;
}
