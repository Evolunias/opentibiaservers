import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-no-reset-server');
}

export default function Serenity14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-no-reset-server" />;
}
