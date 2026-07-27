import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-official');
}

export default function HighrateTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-official" />;
}
