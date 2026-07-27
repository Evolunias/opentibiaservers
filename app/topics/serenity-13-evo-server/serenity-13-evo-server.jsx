import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-evo-server');
}

export default function Serenity13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-evo-server" />;
}
