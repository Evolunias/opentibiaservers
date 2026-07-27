import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-server');
}

export default function LowrateSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-server" />;
}
