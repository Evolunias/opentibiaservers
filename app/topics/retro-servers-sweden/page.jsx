import RetroServersSwedenKeywordPage, { generateMetadata } from './retro-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersSwedenKeywordPage />;
}
