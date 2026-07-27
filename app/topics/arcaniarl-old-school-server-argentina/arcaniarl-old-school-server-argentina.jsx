import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-argentina');
}

export default function ArcaniarlOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-argentina" />;
}
