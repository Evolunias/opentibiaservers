import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-tibia');
}

export default function PremiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="premia-tibia" />;
}
