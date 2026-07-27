import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-commands');
}

export default function CyntaraCommandsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-commands" />;
}
