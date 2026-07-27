import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-server');
}

export default function NoResetSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-server" />;
}
