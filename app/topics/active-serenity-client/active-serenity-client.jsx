import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-client');
}

export default function ActiveSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-client" />;
}
