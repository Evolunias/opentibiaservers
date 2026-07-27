import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-register');
}

export default function OfficialElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-register" />;
}
