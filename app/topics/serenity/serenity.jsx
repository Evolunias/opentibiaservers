import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity');
}

export default function SerenityKeywordPage() {
  return <StaticKeywordPage slug="serenity" />;
}
