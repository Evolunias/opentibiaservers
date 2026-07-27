import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-launch');
}

export default function TibiameLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiame-launch" />;
}
