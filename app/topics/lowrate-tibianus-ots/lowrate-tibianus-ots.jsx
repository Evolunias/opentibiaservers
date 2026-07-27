import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-ots');
}

export default function LowrateTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-ots" />;
}
