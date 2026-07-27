import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-guide');
}

export default function ActiveDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-guide" />;
}
