import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-ot');
}

export default function NewZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-ot" />;
}
