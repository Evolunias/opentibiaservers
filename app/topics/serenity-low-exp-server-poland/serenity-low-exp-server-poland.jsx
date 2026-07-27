import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-poland');
}

export default function SerenityLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-poland" />;
}
