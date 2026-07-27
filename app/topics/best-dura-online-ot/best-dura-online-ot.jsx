import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-ot');
}

export default function BestDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-ot" />;
}
