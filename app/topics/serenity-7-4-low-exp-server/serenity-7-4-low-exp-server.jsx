import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-low-exp-server');
}

export default function Serenity74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-low-exp-server" />;
}
