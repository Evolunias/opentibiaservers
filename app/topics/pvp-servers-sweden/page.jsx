import PvpServersSwedenKeywordPage, { generateMetadata } from './pvp-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersSwedenKeywordPage />;
}
