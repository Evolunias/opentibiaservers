import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-launcher');
}

export default function SaintsotLauncherKeywordPage() {
  return <StaticKeywordPage slug="saintsot-launcher" />;
}
