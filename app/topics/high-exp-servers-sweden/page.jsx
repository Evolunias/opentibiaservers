import HighExpServersSwedenKeywordPage, { generateMetadata } from './high-exp-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersSwedenKeywordPage />;
}
