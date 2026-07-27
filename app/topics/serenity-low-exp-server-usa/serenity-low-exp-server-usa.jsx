import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-usa');
}

export default function SerenityLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-usa" />;
}
