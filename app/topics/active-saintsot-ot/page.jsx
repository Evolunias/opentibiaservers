import ActiveSaintsotOtKeywordPage, { generateMetadata } from './active-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotOtKeywordPage />;
}
