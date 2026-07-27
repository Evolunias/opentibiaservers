import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-low-exp-server');
}

export default function Serenity15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-low-exp-server" />;
}
