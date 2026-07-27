import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-official');
}

export default function HighrateSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-official" />;
}
