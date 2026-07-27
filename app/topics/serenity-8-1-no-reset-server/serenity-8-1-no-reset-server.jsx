import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-no-reset-server');
}

export default function Serenity81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-no-reset-server" />;
}
