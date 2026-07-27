import PopularCoxaotRegisterKeywordPage, { generateMetadata } from './popular-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotRegisterKeywordPage />;
}
