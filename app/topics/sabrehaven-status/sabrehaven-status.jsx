import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-status');
}

export default function SabrehavenStatusKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-status" />;
}
