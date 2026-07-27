import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-europe');
}

export default function SerenityLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-europe" />;
}
