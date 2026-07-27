import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-low-exp-server');
}

export default function Serenity80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-low-exp-server" />;
}
