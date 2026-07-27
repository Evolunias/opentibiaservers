import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-launch');
}

export default function MiracleLaunchKeywordPage() {
  return <StaticKeywordPage slug="miracle-launch" />;
}
