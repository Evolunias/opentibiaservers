import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-poland-servers');
}

export default function SerenityPolandServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-poland-servers" />;
}
