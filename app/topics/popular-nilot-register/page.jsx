import PopularNilotRegisterKeywordPage, { generateMetadata } from './popular-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotRegisterKeywordPage />;
}
