import PopularMediviaRegisterKeywordPage, { generateMetadata } from './popular-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaRegisterKeywordPage />;
}
