import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-launch');
}

export default function ArchlightLaunchKeywordPage() {
  return <StaticKeywordPage slug="archlight-launch" />;
}
