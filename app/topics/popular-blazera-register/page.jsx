import PopularBlazeraRegisterKeywordPage, { generateMetadata } from './popular-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraRegisterKeywordPage />;
}
