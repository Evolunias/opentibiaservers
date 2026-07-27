import HighrateTibiaoriginsOtServerKeywordPage, { generateMetadata } from './highrate-tibiaorigins-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaoriginsOtServerKeywordPage />;
}
