import PopularThaisotRegisterKeywordPage, { generateMetadata } from './popular-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotRegisterKeywordPage />;
}
