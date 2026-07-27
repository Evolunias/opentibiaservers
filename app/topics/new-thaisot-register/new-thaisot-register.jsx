import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-register');
}

export default function NewThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-register" />;
}
