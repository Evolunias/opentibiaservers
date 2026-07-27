import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-ot-server');
}

export default function CurrentSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-ot-server" />;
}
