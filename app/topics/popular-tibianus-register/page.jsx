import PopularTibianusRegisterKeywordPage, { generateMetadata } from './popular-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusRegisterKeywordPage />;
}
