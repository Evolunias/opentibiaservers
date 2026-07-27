import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-poland');
}

export default function TibiascapeOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-poland" />;
}
