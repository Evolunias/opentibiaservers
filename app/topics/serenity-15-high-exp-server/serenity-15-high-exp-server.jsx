import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-high-exp-server');
}

export default function Serenity15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-high-exp-server" />;
}
