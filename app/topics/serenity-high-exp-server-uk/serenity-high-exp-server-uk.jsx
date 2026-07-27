import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-uk');
}

export default function SerenityHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-uk" />;
}
