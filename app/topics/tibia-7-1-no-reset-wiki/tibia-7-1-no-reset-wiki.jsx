import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-wiki');
}

export default function Tibia71NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-wiki" />;
}
