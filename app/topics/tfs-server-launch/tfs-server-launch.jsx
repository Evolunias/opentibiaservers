import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-launch');
}

export default function TfsServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-launch" />;
}
