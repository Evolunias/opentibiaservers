import PopularXanteriaRegisterKeywordPage, { generateMetadata } from './popular-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaRegisterKeywordPage />;
}
