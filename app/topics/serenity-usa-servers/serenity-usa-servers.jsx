import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-usa-servers');
}

export default function SerenityUsaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-usa-servers" />;
}
