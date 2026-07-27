import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-serenity-server');
}

export default function EvoSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="evo-serenity-server" />;
}
