import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-high-exp-server');
}

export default function Serenity11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-high-exp-server" />;
}
