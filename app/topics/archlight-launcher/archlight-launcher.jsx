import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-launcher');
}

export default function ArchlightLauncherKeywordPage() {
  return <StaticKeywordPage slug="archlight-launcher" />;
}
