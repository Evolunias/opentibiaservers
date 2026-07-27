import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-tibia');
}

export default function OfficialDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-tibia" />;
}
