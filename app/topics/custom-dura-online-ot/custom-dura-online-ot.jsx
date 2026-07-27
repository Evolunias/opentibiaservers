import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-ot');
}

export default function CustomDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-ot" />;
}
