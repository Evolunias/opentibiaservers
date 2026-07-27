import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-ot-server');
}

export default function HighrateTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-ot-server" />;
}
