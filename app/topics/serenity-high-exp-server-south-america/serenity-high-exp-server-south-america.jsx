import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-high-exp-server-south-america');
}

export default function SerenityHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-high-exp-server-south-america" />;
}
