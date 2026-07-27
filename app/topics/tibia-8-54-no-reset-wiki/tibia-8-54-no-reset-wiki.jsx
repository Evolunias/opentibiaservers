import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-wiki');
}

export default function Tibia854NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-wiki" />;
}
