import CustomYurotsClientKeywordPage, { generateMetadata } from './custom-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsClientKeywordPage />;
}
