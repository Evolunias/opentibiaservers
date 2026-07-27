import CustomThaisotOtServerKeywordPage, { generateMetadata } from './custom-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotOtServerKeywordPage />;
}
