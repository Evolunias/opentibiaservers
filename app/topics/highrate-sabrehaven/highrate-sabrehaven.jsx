import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven');
}

export default function HighrateSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven" />;
}
