import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-high-exp-server');
}

export default function Serenity12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-high-exp-server" />;
}
