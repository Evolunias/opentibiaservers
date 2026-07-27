import TibiaoriginsWarsKeywordPage, { generateMetadata } from './tibiaorigins-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsWarsKeywordPage />;
}
