import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-launch');
}

export default function MyaacLaunchKeywordPage() {
  return <StaticKeywordPage slug="myaac-launch" />;
}
