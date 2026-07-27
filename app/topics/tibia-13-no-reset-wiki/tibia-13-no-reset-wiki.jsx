import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-wiki');
}

export default function Tibia13NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-wiki" />;
}
