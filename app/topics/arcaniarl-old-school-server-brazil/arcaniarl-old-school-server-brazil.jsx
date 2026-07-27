import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-brazil');
}

export default function ArcaniarlOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-brazil" />;
}
