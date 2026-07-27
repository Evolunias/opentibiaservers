import TopTibianusRegisterKeywordPage, { generateMetadata } from './top-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusRegisterKeywordPage />;
}
