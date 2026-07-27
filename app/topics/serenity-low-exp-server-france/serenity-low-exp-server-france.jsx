import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-france');
}

export default function SerenityLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-france" />;
}
