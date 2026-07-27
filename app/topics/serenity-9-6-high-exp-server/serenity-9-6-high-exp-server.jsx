import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-high-exp-server');
}

export default function Serenity96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-high-exp-server" />;
}
