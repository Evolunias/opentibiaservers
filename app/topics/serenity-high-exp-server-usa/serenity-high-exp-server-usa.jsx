import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-usa');
}

export default function SerenityHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-usa" />;
}
