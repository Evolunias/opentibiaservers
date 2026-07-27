import ActiveEvoleraOtKeywordPage, { generateMetadata } from './active-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraOtKeywordPage />;
}
