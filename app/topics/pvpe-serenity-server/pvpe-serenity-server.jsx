import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-serenity-server');
}

export default function PvpeSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-serenity-server" />;
}
