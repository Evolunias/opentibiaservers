import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-evo-server');
}

export default function Serenity76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-evo-server" />;
}
