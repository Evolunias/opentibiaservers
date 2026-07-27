import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-brazil');
}

export default function SerenityLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-brazil" />;
}
