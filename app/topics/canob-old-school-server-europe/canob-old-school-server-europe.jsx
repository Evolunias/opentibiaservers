import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-europe');
}

export default function CanobOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-europe" />;
}
