import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-launch');
}

export default function OtlandServerGalaLaunchKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-launch" />;
}
