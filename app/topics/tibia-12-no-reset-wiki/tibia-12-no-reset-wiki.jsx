import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-wiki');
}

export default function Tibia12NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-wiki" />;
}
