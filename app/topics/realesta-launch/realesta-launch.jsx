import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-launch');
}

export default function RealestaLaunchKeywordPage() {
  return <StaticKeywordPage slug="realesta-launch" />;
}
