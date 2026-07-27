import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria');
}

export default function NoResetXanteriaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria" />;
}
