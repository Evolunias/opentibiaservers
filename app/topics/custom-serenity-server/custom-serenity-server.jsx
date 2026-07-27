import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-server');
}

export default function CustomSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-server" />;
}
