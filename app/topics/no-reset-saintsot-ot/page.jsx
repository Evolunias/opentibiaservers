import NoResetSaintsotOtKeywordPage, { generateMetadata } from './no-reset-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotOtKeywordPage />;
}
