import CustomThaisotOtKeywordPage, { generateMetadata } from './custom-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotOtKeywordPage />;
}
