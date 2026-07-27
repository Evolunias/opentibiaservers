import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-register');
}

export default function CurrentNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-register" />;
}
