import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-guide');
}

export default function OfficialDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-guide" />;
}
