import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-chile-servers');
}

export default function SerenityChileServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-chile-servers" />;
}
