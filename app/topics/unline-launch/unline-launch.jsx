import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-launch');
}

export default function UnlineLaunchKeywordPage() {
  return <StaticKeywordPage slug="unline-launch" />;
}
