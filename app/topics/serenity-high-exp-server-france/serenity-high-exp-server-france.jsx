import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-france');
}

export default function SerenityHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-france" />;
}
