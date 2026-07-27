import ActiveTibiaoriginsServerKeywordPage, { generateMetadata } from './active-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsServerKeywordPage />;
}
