import LowExpTibiaoriginsServerKeywordPage, { generateMetadata } from './low-exp-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiaoriginsServerKeywordPage />;
}
