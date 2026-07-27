import OtServersSwedenKeywordPage, { generateMetadata } from './ot-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersSwedenKeywordPage />;
}
