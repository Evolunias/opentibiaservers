import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-brazil');
}

export default function SerenityHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-brazil" />;
}
