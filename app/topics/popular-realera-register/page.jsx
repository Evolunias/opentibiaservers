import PopularRealeraRegisterKeywordPage, { generateMetadata } from './popular-realera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraRegisterKeywordPage />;
}
