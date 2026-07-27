import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-europe');
}

export default function SerenityHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-europe" />;
}
