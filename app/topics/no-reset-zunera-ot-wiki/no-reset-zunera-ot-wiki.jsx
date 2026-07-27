import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-wiki');
}

export default function NoResetZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-wiki" />;
}
