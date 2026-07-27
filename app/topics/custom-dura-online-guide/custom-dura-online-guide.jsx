import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-guide');
}

export default function CustomDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-guide" />;
}
