import CustomYurotsKeywordPage, { generateMetadata } from './custom-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsKeywordPage />;
}
