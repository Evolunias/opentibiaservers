import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-reset');
}

export default function SabrehavenResetKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-reset" />;
}
