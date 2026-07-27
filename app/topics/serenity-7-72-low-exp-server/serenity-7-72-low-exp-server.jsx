import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-low-exp-server');
}

export default function Serenity772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-low-exp-server" />;
}
