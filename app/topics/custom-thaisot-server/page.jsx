import CustomThaisotServerKeywordPage, { generateMetadata } from './custom-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotServerKeywordPage />;
}
