import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-status');
}

export default function ImperianicStatusKeywordPage() {
  return <StaticKeywordPage slug="imperianic-status" />;
}
