import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-ots');
}

export default function SabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-ots" />;
}
