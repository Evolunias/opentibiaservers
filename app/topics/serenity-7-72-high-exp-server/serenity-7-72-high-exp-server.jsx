import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-high-exp-server');
}

export default function Serenity772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-high-exp-server" />;
}
