import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-register');
}

export default function BestNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-register" />;
}
