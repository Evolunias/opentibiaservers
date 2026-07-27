import TibiaoriginsPolandServersKeywordPage, { generateMetadata } from './tibiaorigins-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsPolandServersKeywordPage />;
}
