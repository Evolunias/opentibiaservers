import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-poland-server');
}

export default function SerenityPolandServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-poland-server" />;
}
