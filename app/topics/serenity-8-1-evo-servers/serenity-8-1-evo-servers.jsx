import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-evo-servers');
}

export default function Serenity81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-evo-servers" />;
}
