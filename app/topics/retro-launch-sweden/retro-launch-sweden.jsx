import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-sweden');
}

export default function RetroLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-sweden" />;
}
