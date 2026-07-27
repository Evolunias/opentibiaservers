import LowExpServersSwedenKeywordPage, { generateMetadata } from './low-exp-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersSwedenKeywordPage />;
}
