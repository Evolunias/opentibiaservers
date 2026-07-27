import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-commands');
}

export default function CoxaotCommandsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-commands" />;
}
