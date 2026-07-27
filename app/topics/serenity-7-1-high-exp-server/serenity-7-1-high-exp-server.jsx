import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-high-exp-server');
}

export default function Serenity71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-high-exp-server" />;
}
