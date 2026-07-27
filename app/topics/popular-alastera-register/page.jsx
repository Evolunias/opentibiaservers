import PopularAlasteraRegisterKeywordPage, { generateMetadata } from './popular-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraRegisterKeywordPage />;
}
