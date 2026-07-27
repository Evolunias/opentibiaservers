import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot');
}

export default function NoResetCoxaotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot" />;
}
