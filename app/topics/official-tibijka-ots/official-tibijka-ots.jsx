import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-ots');
}

export default function OfficialTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-ots" />;
}
