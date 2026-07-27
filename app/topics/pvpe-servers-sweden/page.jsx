import PvpeServersSwedenKeywordPage, { generateMetadata } from './pvpe-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersSwedenKeywordPage />;
}
