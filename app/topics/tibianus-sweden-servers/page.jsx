import TibianusSwedenServersKeywordPage, { generateMetadata } from './tibianus-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSwedenServersKeywordPage />;
}
