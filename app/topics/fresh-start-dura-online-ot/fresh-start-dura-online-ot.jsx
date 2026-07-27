import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-ot');
}

export default function FreshStartDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-ot" />;
}
