import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-no-reset-server');
}

export default function Serenity1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-no-reset-server" />;
}
