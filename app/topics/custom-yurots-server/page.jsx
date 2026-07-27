import CustomYurotsServerKeywordPage, { generateMetadata } from './custom-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsServerKeywordPage />;
}
