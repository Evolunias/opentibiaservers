import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-brazil-server');
}

export default function SerenityBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-brazil-server" />;
}
