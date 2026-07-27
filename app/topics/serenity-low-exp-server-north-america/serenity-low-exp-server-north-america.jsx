import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-north-america');
}

export default function SerenityLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-north-america" />;
}
