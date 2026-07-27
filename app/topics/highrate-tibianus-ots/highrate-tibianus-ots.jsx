import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-ots');
}

export default function HighrateTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-ots" />;
}
