import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-ot');
}

export default function HighrateSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-ot" />;
}
