import ActiveTibiaoriginsRegisterKeywordPage, { generateMetadata } from './active-tibiaorigins-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsRegisterKeywordPage />;
}
