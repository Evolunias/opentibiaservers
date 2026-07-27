import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-germany');
}

export default function TibiascapeOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-germany" />;
}
