import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-server');
}

export default function CurrentSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-server" />;
}
