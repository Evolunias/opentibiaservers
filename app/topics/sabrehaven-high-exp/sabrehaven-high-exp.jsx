import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp');
}

export default function SabrehavenHighExpKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp" />;
}
