import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-brazil-servers');
}

export default function SerenityBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-brazil-servers" />;
}
