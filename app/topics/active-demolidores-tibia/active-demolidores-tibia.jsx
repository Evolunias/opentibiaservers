import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-tibia');
}

export default function ActiveDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-tibia" />;
}
