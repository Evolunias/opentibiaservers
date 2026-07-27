import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-germany');
}

export default function SerenityHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-germany" />;
}
