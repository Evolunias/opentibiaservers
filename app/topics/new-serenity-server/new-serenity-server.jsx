import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-server');
}

export default function NewSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-server" />;
}
