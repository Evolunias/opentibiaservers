import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-evo-servers');
}

export default function Serenity76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-evo-servers" />;
}
