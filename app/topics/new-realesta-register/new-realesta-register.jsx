import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-register');
}

export default function NewRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-register" />;
}
