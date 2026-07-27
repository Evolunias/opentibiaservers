import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-argentina-server');
}

export default function SerenityArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-argentina-server" />;
}
