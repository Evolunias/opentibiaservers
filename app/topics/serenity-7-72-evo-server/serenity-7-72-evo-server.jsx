import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-evo-server');
}

export default function Serenity772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-evo-server" />;
}
