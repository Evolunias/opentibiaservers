import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-launch');
}

export default function SaintsotLaunchKeywordPage() {
  return <StaticKeywordPage slug="saintsot-launch" />;
}
