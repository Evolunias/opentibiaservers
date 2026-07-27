import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-ots');
}

export default function OfficialMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-ots" />;
}
