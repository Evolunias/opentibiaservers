import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-germany');
}

export default function SerenityLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-germany" />;
}
