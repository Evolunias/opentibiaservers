import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-ot-server');
}

export default function LowrateSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-ot-server" />;
}
