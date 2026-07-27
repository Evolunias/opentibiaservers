import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-ot');
}

export default function ActiveDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-ot" />;
}
