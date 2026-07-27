import SaintsotRegisterKeywordPage, { generateMetadata } from './saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRegisterKeywordPage />;
}
