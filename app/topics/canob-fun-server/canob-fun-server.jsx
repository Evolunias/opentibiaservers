import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fun-server');
}

export default function CanobFunServerKeywordPage() {
  return <StaticKeywordPage slug="canob-fun-server" />;
}
