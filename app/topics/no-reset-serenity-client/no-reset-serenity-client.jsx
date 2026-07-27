import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-client');
}

export default function NoResetSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-client" />;
}
