import PopularEvoleraRegisterKeywordPage, { generateMetadata } from './popular-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraRegisterKeywordPage />;
}
