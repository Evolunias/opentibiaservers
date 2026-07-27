import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-guide');
}

export default function NewDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-guide" />;
}
