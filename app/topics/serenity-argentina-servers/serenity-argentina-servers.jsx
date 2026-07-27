import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-argentina-servers');
}

export default function SerenityArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-argentina-servers" />;
}
