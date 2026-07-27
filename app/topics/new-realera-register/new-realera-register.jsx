import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-register');
}

export default function NewRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-realera-register" />;
}
