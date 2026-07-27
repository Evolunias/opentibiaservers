import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-evo-server');
}

export default function Serenity854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-evo-server" />;
}
