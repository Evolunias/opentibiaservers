import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-tibia-world');
}

export default function PremiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="premia-tibia-world" />;
}
