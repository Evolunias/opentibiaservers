import OtmadnessSwedenServerKeywordPage, { generateMetadata } from './otmadness-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSwedenServerKeywordPage />;
}
