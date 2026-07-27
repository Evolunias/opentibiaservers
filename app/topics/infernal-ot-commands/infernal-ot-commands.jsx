import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-commands');
}

export default function InfernalOtCommandsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-commands" />;
}
