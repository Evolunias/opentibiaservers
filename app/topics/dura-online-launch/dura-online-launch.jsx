import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-launch');
}

export default function DuraOnlineLaunchKeywordPage() {
  return <StaticKeywordPage slug="dura-online-launch" />;
}
