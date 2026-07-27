import TopAmeriaRegisterKeywordPage, { generateMetadata } from './top-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaRegisterKeywordPage />;
}
