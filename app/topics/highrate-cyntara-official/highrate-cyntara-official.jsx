import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-official');
}

export default function HighrateCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-official" />;
}
