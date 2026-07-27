import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-ot');
}

export default function HighrateTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-ot" />;
}
