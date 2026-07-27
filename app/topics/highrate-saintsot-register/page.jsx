import HighrateSaintsotRegisterKeywordPage, { generateMetadata } from './highrate-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotRegisterKeywordPage />;
}
