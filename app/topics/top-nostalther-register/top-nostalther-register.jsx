import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-register');
}

export default function TopNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-register" />;
}
