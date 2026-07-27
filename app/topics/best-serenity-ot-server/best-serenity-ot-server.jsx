import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-ot-server');
}

export default function BestSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-ot-server" />;
}
