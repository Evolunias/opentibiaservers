import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-private-server');
}

export default function NoResetSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-private-server" />;
}
