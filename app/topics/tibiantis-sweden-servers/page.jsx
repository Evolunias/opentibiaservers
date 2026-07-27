import TibiantisSwedenServersKeywordPage, { generateMetadata } from './tibiantis-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSwedenServersKeywordPage />;
}
