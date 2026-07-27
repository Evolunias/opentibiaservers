import HighrateTibiaoriginsClientKeywordPage, { generateMetadata } from './highrate-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaoriginsClientKeywordPage />;
}
