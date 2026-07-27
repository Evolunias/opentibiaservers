import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-evo-servers');
}

export default function Serenity96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-evo-servers" />;
}
