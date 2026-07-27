import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-register');
}

export default function ArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-register" />;
}
