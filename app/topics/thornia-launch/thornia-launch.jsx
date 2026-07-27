import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-launch');
}

export default function ThorniaLaunchKeywordPage() {
  return <StaticKeywordPage slug="thornia-launch" />;
}
