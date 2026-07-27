import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-evo-servers');
}

export default function Serenity12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-evo-servers" />;
}
