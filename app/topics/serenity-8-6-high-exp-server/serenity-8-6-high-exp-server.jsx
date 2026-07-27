import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-high-exp-server');
}

export default function Serenity86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-high-exp-server" />;
}
