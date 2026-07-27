import CoxaotRealMapServersSwedenKeywordPage, { generateMetadata } from './coxaot-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRealMapServersSwedenKeywordPage />;
}
