import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-high-exp-server');
}

export default function Serenity100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-high-exp-server" />;
}
