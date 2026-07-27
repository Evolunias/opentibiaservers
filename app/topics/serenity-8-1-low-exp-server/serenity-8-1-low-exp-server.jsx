import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-low-exp-server');
}

export default function Serenity81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-low-exp-server" />;
}
