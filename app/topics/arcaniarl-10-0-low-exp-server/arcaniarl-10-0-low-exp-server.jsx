import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-low-exp-server');
}

export default function Arcaniarl100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-low-exp-server" />;
}
