import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-official');
}

export default function HighrateDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-official" />;
}
