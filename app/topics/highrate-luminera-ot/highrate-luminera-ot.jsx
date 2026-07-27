import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-ot');
}

export default function HighrateLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-ot" />;
}
