import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-evo-server');
}

export default function Serenity15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-evo-server" />;
}
