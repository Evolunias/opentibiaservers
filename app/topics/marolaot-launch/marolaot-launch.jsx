import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-launch');
}

export default function MarolaotLaunchKeywordPage() {
  return <StaticKeywordPage slug="marolaot-launch" />;
}
