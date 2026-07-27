import ActiveTibiaoriginsClientKeywordPage, { generateMetadata } from './active-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsClientKeywordPage />;
}
