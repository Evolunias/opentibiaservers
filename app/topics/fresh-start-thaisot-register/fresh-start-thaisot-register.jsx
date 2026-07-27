import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-register');
}

export default function FreshStartThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-register" />;
}
