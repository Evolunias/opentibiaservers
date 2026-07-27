import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-ot-server');
}

export default function PopularSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-ot-server" />;
}
