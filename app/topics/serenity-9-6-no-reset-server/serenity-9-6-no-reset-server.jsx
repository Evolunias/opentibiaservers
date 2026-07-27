import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-no-reset-server');
}

export default function Serenity96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-no-reset-server" />;
}
