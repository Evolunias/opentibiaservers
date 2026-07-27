import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-no-reset-server');
}

export default function Serenity15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-no-reset-server" />;
}
