import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-chile-server');
}

export default function SerenityChileServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-chile-server" />;
}
