import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-evo-servers');
}

export default function Serenity84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-evo-servers" />;
}
