import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-ots');
}

export default function HighrateLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-ots" />;
}
