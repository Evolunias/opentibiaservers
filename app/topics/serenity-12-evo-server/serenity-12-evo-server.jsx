import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-evo-server');
}

export default function Serenity12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-evo-server" />;
}
