import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-evo-server');
}

export default function Serenity86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-evo-server" />;
}
