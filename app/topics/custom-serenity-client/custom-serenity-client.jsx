import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-client');
}

export default function CustomSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-client" />;
}
