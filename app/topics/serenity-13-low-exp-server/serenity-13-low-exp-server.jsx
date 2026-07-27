import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-low-exp-server');
}

export default function Serenity13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-low-exp-server" />;
}
