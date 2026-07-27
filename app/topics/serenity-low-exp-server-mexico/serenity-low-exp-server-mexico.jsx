import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-mexico');
}

export default function SerenityLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-mexico" />;
}
