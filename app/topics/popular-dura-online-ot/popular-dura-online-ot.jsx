import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-ot');
}

export default function PopularDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-ot" />;
}
