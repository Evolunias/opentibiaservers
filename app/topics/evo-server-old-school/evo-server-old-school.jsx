import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-old-school');
}

export default function EvoServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="evo-server-old-school" />;
}
