import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-poland');
}

export default function SerenityHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-poland" />;
}
