import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot');
}

export default function HighrateCoxaotKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot" />;
}
