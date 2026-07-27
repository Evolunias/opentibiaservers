import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot');
}

export default function NewCoxaotKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot" />;
}
