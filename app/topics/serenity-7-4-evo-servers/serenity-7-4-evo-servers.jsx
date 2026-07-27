import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-evo-servers');
}

export default function Serenity74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-evo-servers" />;
}
