import TibiaoriginsUkServerKeywordPage, { generateMetadata } from './tibiaorigins-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsUkServerKeywordPage />;
}
