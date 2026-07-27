import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-ot-server');
}

export default function ActiveSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-ot-server" />;
}
