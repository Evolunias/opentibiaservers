import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-guide');
}

export default function DuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="dura-online-guide" />;
}
