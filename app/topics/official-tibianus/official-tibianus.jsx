import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus');
}

export default function OfficialTibianusKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus" />;
}
