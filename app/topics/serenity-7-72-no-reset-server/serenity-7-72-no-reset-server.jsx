import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-no-reset-server');
}

export default function Serenity772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-no-reset-server" />;
}
