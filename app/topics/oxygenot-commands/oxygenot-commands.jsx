import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-commands');
}

export default function OxygenotCommandsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-commands" />;
}
