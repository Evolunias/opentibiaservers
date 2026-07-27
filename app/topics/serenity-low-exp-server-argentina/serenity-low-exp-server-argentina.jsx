import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-argentina');
}

export default function SerenityLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-argentina" />;
}
