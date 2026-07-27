import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-no-reset-server');
}

export default function Serenity12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-no-reset-server" />;
}
