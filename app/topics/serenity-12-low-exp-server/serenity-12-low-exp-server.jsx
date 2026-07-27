import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-low-exp-server');
}

export default function Serenity12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-low-exp-server" />;
}
