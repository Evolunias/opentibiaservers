import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-ots');
}

export default function OfficialElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-ots" />;
}
