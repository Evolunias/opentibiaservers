import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot');
}

export default function ActiveNilotKeywordPage() {
  return <StaticKeywordPage slug="active-nilot" />;
}
