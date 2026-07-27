import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-launcher');
}

export default function TibiameLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiame-launcher" />;
}
