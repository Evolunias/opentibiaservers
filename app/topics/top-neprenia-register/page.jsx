import TopNepreniaRegisterKeywordPage, { generateMetadata } from './top-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaRegisterKeywordPage />;
}
