import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-wiki');
}

export default function NoResetSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-wiki" />;
}
