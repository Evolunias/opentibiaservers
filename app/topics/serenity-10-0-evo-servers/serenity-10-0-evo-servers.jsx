import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-evo-servers');
}

export default function Serenity100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-evo-servers" />;
}
