import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-ot-server');
}

export default function CustomSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-ot-server" />;
}
