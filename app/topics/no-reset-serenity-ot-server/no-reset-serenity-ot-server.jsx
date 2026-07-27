import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-ot-server');
}

export default function NoResetSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-ot-server" />;
}
