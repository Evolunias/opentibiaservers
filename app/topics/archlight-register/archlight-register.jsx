import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-register');
}

export default function ArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="archlight-register" />;
}
