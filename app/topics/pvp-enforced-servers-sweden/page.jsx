import PvpEnforcedServersSwedenKeywordPage, { generateMetadata } from './pvp-enforced-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersSwedenKeywordPage />;
}
