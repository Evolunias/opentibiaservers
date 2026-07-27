import PopularAmeriaRegisterKeywordPage, { generateMetadata } from './popular-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaRegisterKeywordPage />;
}
