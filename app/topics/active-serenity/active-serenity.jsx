import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity');
}

export default function ActiveSerenityKeywordPage() {
  return <StaticKeywordPage slug="active-serenity" />;
}
