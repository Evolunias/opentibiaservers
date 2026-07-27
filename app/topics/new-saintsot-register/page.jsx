import NewSaintsotRegisterKeywordPage, { generateMetadata } from './new-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotRegisterKeywordPage />;
}
