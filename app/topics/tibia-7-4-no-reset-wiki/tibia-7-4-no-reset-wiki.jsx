import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-wiki');
}

export default function Tibia74NoResetWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-wiki" />;
}
