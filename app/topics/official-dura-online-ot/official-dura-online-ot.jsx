import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-ot');
}

export default function OfficialDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-ot" />;
}
