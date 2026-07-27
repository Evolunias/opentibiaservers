import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot');
}

export default function OfficialCoxaotKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot" />;
}
