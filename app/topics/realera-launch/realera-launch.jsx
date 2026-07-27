import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-launch');
}

export default function RealeraLaunchKeywordPage() {
  return <StaticKeywordPage slug="realera-launch" />;
}
