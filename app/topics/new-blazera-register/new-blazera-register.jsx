import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-register');
}

export default function NewBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-register" />;
}
