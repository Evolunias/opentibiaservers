import PopularImperianicRegisterKeywordPage, { generateMetadata } from './popular-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicRegisterKeywordPage />;
}
