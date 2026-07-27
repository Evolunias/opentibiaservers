import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-ot-server');
}

export default function SerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-ot-server" />;
}
