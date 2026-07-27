import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-low-exp-server');
}

export default function Serenity11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-low-exp-server" />;
}
