import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-serenity-servers');
}

export default function EvoSerenityServersKeywordPage() {
  return <StaticKeywordPage slug="evo-serenity-servers" />;
}
