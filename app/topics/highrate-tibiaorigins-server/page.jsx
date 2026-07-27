import HighrateTibiaoriginsServerKeywordPage, { generateMetadata } from './highrate-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaoriginsServerKeywordPage />;
}
