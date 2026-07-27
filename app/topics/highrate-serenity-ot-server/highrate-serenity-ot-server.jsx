import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-ot-server');
}

export default function HighrateSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-ot-server" />;
}
