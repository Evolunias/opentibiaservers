import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-europe');
}

export default function BaiakRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-europe" />;
}
