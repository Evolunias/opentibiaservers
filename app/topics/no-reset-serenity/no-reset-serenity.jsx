import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity');
}

export default function NoResetSerenityKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity" />;
}
