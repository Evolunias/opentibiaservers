import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-evo-server');
}

export default function Serenity74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-evo-server" />;
}
