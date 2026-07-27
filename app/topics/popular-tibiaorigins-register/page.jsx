import PopularTibiaoriginsRegisterKeywordPage, { generateMetadata } from './popular-tibiaorigins-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsRegisterKeywordPage />;
}
