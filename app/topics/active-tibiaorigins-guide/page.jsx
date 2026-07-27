import ActiveTibiaoriginsGuideKeywordPage, { generateMetadata } from './active-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsGuideKeywordPage />;
}
