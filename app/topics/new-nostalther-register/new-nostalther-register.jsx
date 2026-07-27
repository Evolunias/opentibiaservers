import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-register');
}

export default function NewNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-register" />;
}
