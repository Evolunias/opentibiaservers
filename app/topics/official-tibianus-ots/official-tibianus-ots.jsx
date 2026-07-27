import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-ots');
}

export default function OfficialTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-ots" />;
}
