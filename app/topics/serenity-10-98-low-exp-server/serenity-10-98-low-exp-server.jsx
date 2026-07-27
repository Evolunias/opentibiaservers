import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-low-exp-server');
}

export default function Serenity1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-low-exp-server" />;
}
