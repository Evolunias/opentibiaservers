import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-launcher');
}

export default function NilotLauncherKeywordPage() {
  return <StaticKeywordPage slug="nilot-launcher" />;
}
