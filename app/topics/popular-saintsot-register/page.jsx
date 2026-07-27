import PopularSaintsotRegisterKeywordPage, { generateMetadata } from './popular-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotRegisterKeywordPage />;
}
