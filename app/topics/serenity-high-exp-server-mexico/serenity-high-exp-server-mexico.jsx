import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-mexico');
}

export default function SerenityHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-mexico" />;
}
