import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-wiki');
}

export default function Tibia15NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-wiki" />;
}
