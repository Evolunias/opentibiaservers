import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-wiki');
}

export default function Tibia84NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-wiki" />;
}
