import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-uk');
}

export default function SerenityLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-uk" />;
}
