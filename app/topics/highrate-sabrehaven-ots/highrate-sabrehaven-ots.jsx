import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-ots');
}

export default function HighrateSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-ots" />;
}
