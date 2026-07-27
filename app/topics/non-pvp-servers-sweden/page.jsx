import NonPvpServersSwedenKeywordPage, { generateMetadata } from './non-pvp-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersSwedenKeywordPage />;
}
