import BaiakTibiaoriginsServerKeywordPage, { generateMetadata } from './baiak-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaoriginsServerKeywordPage />;
}
