import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-low-exp-server-canada');
}

export default function SerenityLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-low-exp-server-canada" />;
}
