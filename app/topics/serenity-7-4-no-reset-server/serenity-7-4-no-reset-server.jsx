import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-no-reset-server');
}

export default function Serenity74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-no-reset-server" />;
}
