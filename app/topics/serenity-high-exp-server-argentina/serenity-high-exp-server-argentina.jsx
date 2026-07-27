import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-argentina');
}

export default function SerenityHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-argentina" />;
}
