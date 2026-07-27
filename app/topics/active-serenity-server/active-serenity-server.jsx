import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-server');
}

export default function ActiveSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-server" />;
}
