import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-north-america');
}

export default function SerenityHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-north-america" />;
}
