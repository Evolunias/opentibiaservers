import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-evo-server');
}

export default function Serenity71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-evo-server" />;
}
