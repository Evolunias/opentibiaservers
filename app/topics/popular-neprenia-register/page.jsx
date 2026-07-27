import PopularNepreniaRegisterKeywordPage, { generateMetadata } from './popular-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaRegisterKeywordPage />;
}
