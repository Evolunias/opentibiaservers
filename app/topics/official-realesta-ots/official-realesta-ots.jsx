import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-ots');
}

export default function OfficialRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-ots" />;
}
