import HighrateSaintsotOtKeywordPage, { generateMetadata } from './highrate-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotOtKeywordPage />;
}
