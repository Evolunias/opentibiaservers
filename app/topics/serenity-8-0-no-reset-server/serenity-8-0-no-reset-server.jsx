import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-no-reset-server');
}

export default function Serenity80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-no-reset-server" />;
}
