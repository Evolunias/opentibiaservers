import TibiantisSwedenServerKeywordPage, { generateMetadata } from './tibiantis-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSwedenServerKeywordPage />;
}
