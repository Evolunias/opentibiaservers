import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-evo-server');
}

export default function Serenity81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-evo-server" />;
}
