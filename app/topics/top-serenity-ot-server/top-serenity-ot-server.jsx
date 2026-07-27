import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-ot-server');
}

export default function TopSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-ot-server" />;
}
