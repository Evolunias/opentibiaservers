import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-ot-server');
}

export default function HighrateClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-ot-server" />;
}
