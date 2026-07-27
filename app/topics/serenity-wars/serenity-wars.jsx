import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-wars');
}

export default function SerenityWarsKeywordPage() {
  return <StaticKeywordPage slug="serenity-wars" />;
}
