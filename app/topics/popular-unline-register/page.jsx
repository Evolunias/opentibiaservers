import PopularUnlineRegisterKeywordPage, { generateMetadata } from './popular-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineRegisterKeywordPage />;
}
