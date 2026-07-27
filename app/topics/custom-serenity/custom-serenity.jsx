import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity');
}

export default function CustomSerenityKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity" />;
}
