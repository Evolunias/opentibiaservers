import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-old-school');
}

export default function FunServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="fun-server-old-school" />;
}
