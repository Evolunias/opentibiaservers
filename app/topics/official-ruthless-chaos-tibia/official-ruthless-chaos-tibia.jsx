import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-tibia');
}

export default function OfficialRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-tibia" />;
}
