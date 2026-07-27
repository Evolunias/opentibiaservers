import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-serenity-server');
}

export default function RetroSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="retro-serenity-server" />;
}
