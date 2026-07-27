import PopularNostaltherRegisterKeywordPage, { generateMetadata } from './popular-nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherRegisterKeywordPage />;
}
