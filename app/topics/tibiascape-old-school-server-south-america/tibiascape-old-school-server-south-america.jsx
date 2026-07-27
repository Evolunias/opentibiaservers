import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-south-america');
}

export default function TibiascapeOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-south-america" />;
}
