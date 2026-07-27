import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-official');
}

export default function HighrateZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-official" />;
}
