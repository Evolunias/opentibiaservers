import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-commands');
}

export default function EmpirebrCommandsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-commands" />;
}
