import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-europe');
}

export default function TibiascapeOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-europe" />;
}
