import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-launch');
}

export default function TibiantisLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-launch" />;
}
