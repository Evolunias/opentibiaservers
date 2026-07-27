import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-client');
}

export default function SerenityClientKeywordPage() {
  return <StaticKeywordPage slug="serenity-client" />;
}
