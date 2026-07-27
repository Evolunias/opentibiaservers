import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-high-exp-server');
}

export default function Serenity13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-high-exp-server" />;
}
