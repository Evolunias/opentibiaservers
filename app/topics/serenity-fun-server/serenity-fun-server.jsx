import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fun-server');
}

export default function SerenityFunServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-fun-server" />;
}
