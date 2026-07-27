import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-wiki');
}

export default function Tibia76NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-wiki" />;
}
