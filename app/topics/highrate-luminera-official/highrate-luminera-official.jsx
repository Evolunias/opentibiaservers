import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-official');
}

export default function HighrateLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-official" />;
}
