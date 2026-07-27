import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-germany-servers');
}

export default function SerenityGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-germany-servers" />;
}
