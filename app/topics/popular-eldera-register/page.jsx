import PopularElderaRegisterKeywordPage, { generateMetadata } from './popular-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaRegisterKeywordPage />;
}
